Rails.application.routes.draw do
  resources :contacts
  resources :projets
  # resources :messages
  devise_for :admins
  get '/', to: 'site#home', as: "root"
  get'/contact', to:'contacts#new', as: :contact_me
  get'/listcontact',to: 'contacts#index'
  get'/a_propos', to:'site#a_propos', as: :a_propos

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
