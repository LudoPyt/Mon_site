class Contact < ApplicationRecord
    validates :prenom, :nom, :email, :message, presence: true
    validates :email, :format => { :with => %r{.+@.+\..+} }, allow_blank: true
end
