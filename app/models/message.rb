class Message
    include ActiveModel::Model
    attr_accessor :prenom, :nom, :email, :contenu
    validates :prenom, :nom, :email, :contenu, presence: true
    validates :email, :format => { :with => %r{.+@.+\..+} }, allow_blank: true
end
