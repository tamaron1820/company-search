Rails.application.routes.draw do
  devise_for :users
  
  resources :corporations, only: [:index, :create, :update, :destroy, :search] do
    # 他のアクションのルート定義...
  end
  resources :sessions, only: [:new, :create, :destroy]
  namespace :api do
    get '/corporations', to: 'corporations#index' 
    get '/corporations/search', to: 'corporations#search'  
    post '/corporations/create', to: 'corporations#create'
    delete '/corporations/:id', to: 'corporations#destroy'
    post '/login', to: 'sessions#create'
    post 'register', to: 'users#create'
  end
end
