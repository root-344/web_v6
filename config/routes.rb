Rails.application.routes.draw do
  get 'posts/index'
  root to: "posts#index"
  get 'post', to: "posts#index"
end

