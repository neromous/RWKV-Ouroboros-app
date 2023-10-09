(ns ouroboros.app.core
  (:require   [reagent.core :as r]
              [reagent.dom :as rdom]
              [goog.events :as events]
              [goog.history.EventType :as HistoryEventType]
              [ajax.core :refer [GET POST]]
              [reitit.core :as reitit]
              [clojure.string :as string]
              [ouroboros.app.db :as db]
              [ouroboros.app.pages.home :as home])

  (:import goog.History))

(defonce session (r/atom {:page :home}))

(defn about-page []
  [:div [:p "dfas====about-page"]])


(def pages
  {:home #'home/main
   :about #'about-page})

(defn page []
  [(pages (:page @session))])

(def router
  (reitit/router
   [["/" :home]
    ["/about" :about]]))

(defn match-route [uri]
  (->> (or (not-empty (string/replace uri #"^.*#" "")) "/")
       (reitit/match-by-path router)
       :data
       :name))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [^js/Event.token event]
       (swap! session assoc :page (match-route (.-token event)))))
    (.setEnabled true)))

(defn ^:dev/after-load mount-components []
  (rdom/render [#'page] (.getElementById js/document "app")))


;; (db/transact [{:scene/id "000"}])
;; (println (db/q '[:find [(pull ?e [*])]
;;                  :where [?e :scene/id]]))

(defn init []
  (hook-browser-navigation!)
  (mount-components))
