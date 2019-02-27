class MessagesController < ApplicationController
    add_breadcrumb "Menu", :root_path
    add_breadcrumb "Contact", :contact_path
    def new
        @message = Message.new
      end
    def create
        @message = Message.new(message_params)
        if @message.valid?
            MessageMailer.contact(@message).deliver_now
            redirect_to new_message_url
            flash[:notice] = "J'ai bien reçu ton petit contact, je te recontacterai bientôt"
        else
            flash[:notice] = "Il y a eu une erreur lors de l'envoi. Essaye encore s'il te plait."
            render :new
          end
        end
    private
    def message_params
        params.require(:message).permit(:nom, :prenom, :email,:contenu)
    end
end
