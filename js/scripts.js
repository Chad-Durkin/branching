$(document).ready(function() {
  $("form#header").submit(function(event) {

    event.preventDefault();
    var areYouVoting = $("select#going-voting").val();

    if(areYouVoting === "NO") {
      $(".adult").hide();
      $(".whereToVote").hide();
      $(".register").hide();
      $(".minor").show();
    }
    else if(areYouVoting == "YES") {
      $(".minor").hide();
      $(".adult").show();
      $(".areYouRegistered").show();
    }
  });

  $("form#adultVoter").submit(function(event) {

    event.preventDefault();
    var areYouRegistered = $("select#are-you-registered").val();

    if(areYouRegistered === "NO") {
      $(".whereToVote").hide();
      $(".register").show();
    }
    else if(areYouRegistered === "YES") {
      $(".register").hide();
      $(".whereToVote").show();
    }

  });

});
