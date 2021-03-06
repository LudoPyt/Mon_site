require "application_system_test_case"

class ProjetsTest < ApplicationSystemTestCase
  setup do
    @projet = projets(:one)
  end

  test "visiting the index" do
    visit projets_url
    assert_selector "h1", text: "Projets"
  end

  test "creating a Projet" do
    visit projets_url
    click_on "New Projet"

    fill_in "Client", with: @projet.client
    fill_in "Comment", with: @projet.comment
    fill_in "Content", with: @projet.content
    fill_in "Img1", with: @projet.img1
    fill_in "Img2", with: @projet.img2
    fill_in "Img3", with: @projet.img3
    fill_in "Img4", with: @projet.img4
    fill_in "Lien", with: @projet.lien
    fill_in "Team", with: @projet.team
    fill_in "Technos", with: @projet.technos
    fill_in "Title", with: @projet.title
    click_on "Create Projet"

    assert_text "Projet was successfully created"
    click_on "Back"
  end

  test "updating a Projet" do
    visit projets_url
    click_on "Edit", match: :first

    fill_in "Client", with: @projet.client
    fill_in "Comment", with: @projet.comment
    fill_in "Content", with: @projet.content
    fill_in "Img1", with: @projet.img1
    fill_in "Img2", with: @projet.img2
    fill_in "Img3", with: @projet.img3
    fill_in "Img4", with: @projet.img4
    fill_in "Lien", with: @projet.lien
    fill_in "Team", with: @projet.team
    fill_in "Technos", with: @projet.technos
    fill_in "Title", with: @projet.title
    click_on "Update Projet"

    assert_text "Projet was successfully updated"
    click_on "Back"
  end

  test "destroying a Projet" do
    visit projets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Projet was successfully destroyed"
  end
end
