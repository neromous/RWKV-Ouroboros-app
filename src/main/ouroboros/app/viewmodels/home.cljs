(ns ouroboros.app.viewmodels.home
  (:require [ajax.core :as http]
            [clojure.spec.alpha :as s]
            [reagent.core :as r]
            [markdown.core :refer [md->html]]
            [ouroboros.app.db-schema]
            [ouroboros.app.db :as db]))

(def host "http://172.16.2.197:3000")


(defn load-model  [])
(defn load-state  [])
(defn reset-state [])
(defn state-init [])


(defn inference [messages]
  {:pre }
  (let [messages    (map (fn [x] (assoc x :message/role
                                        (get-in x [:message/role :role/name]))) messages)
        messages    (map (fn [x]
                           (zipmap (map #(name %) (keys x))  (vals x))) messages)
        handler-fn  (fn [{:keys [messages]}]
                      (let [])
                      )]
    (http/POST host {:params   {:messages messages}
                     :handler handler-fn
                     :format :json
                     :keywords? false
                     :response-format :json
                     :error-handler println})))


(defn train [])



(defn inference [[prompt & {:as config}]]
  (let [host   "http://172.16.2.197/generate"
        prompt  (if (string? prompt) prompt (to-prompt prompt))
        config  (assoc config :prompt prompt)
        handler-fn  (fn [response]
                      (let [input   (get response :prompt "")
                            content (get response :response  "没有返回值")]
                        (db/transact [{:prompt/uuid           (db/squuid)
                                       :prompt/instruction    input
                                       :prompt/response       content
                                       :prompt/time           (js/Date.) }])))]
    (http/POST host {:params   (merge rwkv-config config)
                     :handler handler-fn
                     :format :json
                     :keywords? true
                     :response-format :json
                     :error-handler println})))





;; (defn rwkv-bot-reset []
;; (http/GET "http://172.16.2.197:8000/reset"))


;; (def rwkv-config {:prompt "\n"
;;                   :temperature 2.0
;;                   :top_p 0.6
;;                   :top_k  0
;;                   :alpha_frequency 0.35
;;                   :alpha_presence 0.35
;;                   :token_ban []
;;                   :token_stop [0
;;                                ;;0
;;                                ;;11
;;                                ;;261
;;                                ;;265
;;                                ;;402
;;                                ;;3336
;;                                ;;3328
;;                                ;;3329
;;                                ;;19239
;;                                ;;28349
;;                                ;;36206
;;                                ;;53648
;;                                ;;24281

;;                                ]
;;                   :chunk_len 512
;;                   :token_count 512})


;; (defn to-prompt
;;   [[text & {:as template}]]
;;   (let [system-prefix      (get template :system/prefix     "")
;;         system-postfix     (get template :system/postfix    "")
;;         user-prefix        (get template :user/prefix       "## Question: ")
;;         user-postfix       (get template :user/postfix      "\n\n")
;;         robot-prefix       (get template :robot/prefix      "## Answer: ")
;;         robot-impl         (get template :robot/impl         "")]
;;     (str system-prefix system-postfix
;;          user-prefix  text user-postfix
;;          robot-prefix robot-impl)))

;; (defn inference [[prompt & {:as config}]]
;;   (let [host   "http://172.16.2.197/generate"
;;         prompt  (if (string? prompt) prompt (to-prompt prompt))
;;         config  (assoc config :prompt prompt)
;;         handler-fn  (fn [response]
;;                       (let [input   (get response :prompt "")
;;                             content (get response :response  "没有返回值")]
;;                         (db/transact [{:prompt/uuid           (db/squuid)
;;                                        :prompt/instruction    input
;;                                        :prompt/response       content
;;                                        :prompt/time           (js/Date.) }])))]
;;     (http/POST host {:params   (merge rwkv-config config)
;;                      :handler handler-fn
;;                      :format :json
;;                      :keywords? true
;;                      :response-format :json
;;                      :error-handler println})))
