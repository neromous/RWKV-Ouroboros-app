(ns ouroboros.app.pages.home
  (:require [reagent.core :as r]
            ["react-list" :as react-list]))


(defn chat-item [i,k]
  (let []
    (r/as-element
     [:article.message.is-small
      {:key k
       }
      ;;[:div.message-header  "dddd"]
      [:div.message-body
       [:div.columns
        [:div.column.is-1
         [:figure.image.is-32x32
          [:img {:src "https://i.pinimg.com/originals/0c/16/8e/0c168e4543e671ba5ff9c3c1f98484cf.png" }]
          ]
         ]
        [:div.column.is-10
         [:strong "dasdf"]
         ]
        ]


       "wwwwww"   "dasdfds" ]
      ]
     )
    ))

(defn chat-view []
  (r/with-let [items (range 0 256)]
    (let []
      [:div.box
       {:style {:overflow "auto"
                :max-height "650px"
                :height     "100%"}}
       [:> react-list
        {:type "uniform"
         :length 100
         :itemRenderer chat-item  }]])))

(defn chat-input []
  [:div.box
   {:style {;;:height "30%"
            :width "960px"
            :position "fixed"
            :bottom 0}}

   [:div.columns
    [:div.column.is-10
     [:textarea.textarea.is-small
      {:type "text"
       :value "ddasd"
       :row 40}]]
    [:div.column.is-2
     [:button.button.is-primary {} "这里是输入按钮"]]]])

(defn dashboard []
  [:div.box "这里是dashboard"])

(defn chat-box []
  [:div])

(defn main []
  [:div.container
   [:div.columns.is-desktop
    [:div.column.is-two-thrid.is-8
     [chat-view]
     [chat-input]]
    [:div.column.is-one-thrid.is-4
     [dashboard]]]])
