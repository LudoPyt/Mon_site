require 'test_helper'

class ProjetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @projet = projets(:one)
  end

  test "should get index" do
    get projets_url
    assert_response :success
  end

  test "should get new" do
    get new_projet_url
    assert_response :success
  end

  test "should create projet" do
    assert_difference('Projet.count') do
      post projets_url, params: { projet: { client: @projet.client, comment: @projet.comment, content: @projet.content, img1: @projet.img1, img2: @projet.img2, img3: @projet.img3, img4: @projet.img4, lien: @projet.lien, team: @projet.team, technos: @projet.technos, title: @projet.title } }
    end

    assert_redirected_to projet_url(Projet.last)
  end

  test "should show projet" do
    get projet_url(@projet)
    assert_response :success
  end

  test "should get edit" do
    get edit_projet_url(@projet)
    assert_response :success
  end

  test "should update projet" do
    patch projet_url(@projet), params: { projet: { client: @projet.client, comment: @projet.comment, content: @projet.content, img1: @projet.img1, img2: @projet.img2, img3: @projet.img3, img4: @projet.img4, lien: @projet.lien, team: @projet.team, technos: @projet.technos, title: @projet.title } }
    assert_redirected_to projet_url(@projet)
  end

  test "should destroy projet" do
    assert_difference('Projet.count', -1) do
      delete projet_url(@projet)
    end

    assert_redirected_to projets_url
  end
end
