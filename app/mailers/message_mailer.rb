class MessageMailer < ActionMailer::Base
    # default from: 'from@example.com'
    layout 'mailer'
    def contact(message)
        @contenu = message.contenu
        @to = "ludovic.pouyaut@gmail.com"
     
        mail(to: @to, subject: "Nouveau contact depuis le site") do |format|
          format.html
        end
    end
  end