(ns ouroboros.app.db
  (:require [reagent.core :as r]
            [datascript.core :as d]
            [ouroboros.app.db-schema :refer [schema]]
            ))

(defn squuid [] (d/squuid))

(defonce datomic-db
  (let [init-schema schema]

    (d/empty-db init-schema)))

(defonce conn (d/conn-from-db datomic-db))

(defonce global-state! (r/atom {:tx 0
                                :conn conn}))

(d/listen! conn
           (fn [args]
             (swap! global-state! update :tx inc)))

(defn transact [tx-data]
  (let [conn (:conn @global-state!)]
    (d/transact conn tx-data)))


(defn q [query & args]
  (let [conn (:conn @global-state!)]
    (apply d/q query @conn args)))
