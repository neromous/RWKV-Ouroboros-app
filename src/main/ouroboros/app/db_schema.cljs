(ns ouroboros.app.db-schema
  (:require [clojure.spec.alpha :as s]))

(def schema
  {:scene/id               {:db/unique             :db.unique/identity}
   :scene/messages         {:db/valueType          :db.type/ref
                            :db/cardinality        :db.cardinality/many}
   :message/id             {:db/unique             :db.unique/identity}
   :message/role           {:db/valueType          :db.type/ref
                            :db/cardinality        :db.cardinality/one}
   :role/name              {:db/unique             :db.unique/identity}})

(s/def :scene/id int?)
(s/def :scene/name string?)
(s/def :message/id int?)
(s/def :message/role string?)
(s/def :message/text string?)
(s/def :message/prefix string?)
(s/def :message/postfix string?)
(s/def :message/over boolean?)
(s/def :message/prefix-token (s/every int?))
(s/def :message/postfix-token (s/every int?))
;; (s/def :message.train/loss  float?)
;; (s/def :message.train/train-times  float?)
;; (s/def :message.inference/temperature float?)
;; (s/def :message.inference/top_p float?)
;; (s/def :message.inference/alpha_frequency float?)
;; (s/def :message.inference/alpha_decay float?)
;; (s/def :message.inference/alpha_presence float?)
;; (s/def :message.inference/token_count int?)
;; (s/def :message.inference/token_ban (s/every int?))
;; (s/def :message.inference/token_stop (s/every int?))

(s/def :message/loss  float?)
(s/def :message/train-times  float?)
(s/def :message/temperature float?)
(s/def :message/top_p float?)
(s/def :message/alpha_frequency float?)
(s/def :message/alpha_decay float?)
(s/def :message/alpha_presence float?)
(s/def :message/token_count int?)
(s/def :message/token_ban (s/every int?))
(s/def :message/token_stop (s/every int?))
(s/def :message/tokens (s/every int))
(s/def :role/name string?)
(s/def :role/prefix string?)
(s/def :role/postfix string?)

(s/def :entity/role (s/keys :req [:role/name]
                            :opt [:role/prefix :role/postfix]))
(s/def :message/role :entity/role)
(s/def :entity/message (s/keys :req [:message/id :message/text :message/role]
                               :opt [:message/prefix
                                     :message/over
                                     :message/postfix
                                     :message/prefix-token
                                     :message/postfix-token
                                     :message/loss
                                     :message/train-times
                                     :message/temperature
                                     :message/top_p
                                     :message/alpha_frequency
                                     :message/alpha_decay
                                     :message/alpha_presence
                                     :message/token_count
                                     :message/token_ban
                                     :message/token_stop
                                     :message/tokens]))
(s/def :scene/messages (s/every :entity/message))

(s/def :entity/scene (s/keys :req [:scene/id :scene/messages]
                             :opt [:scene/name]))
