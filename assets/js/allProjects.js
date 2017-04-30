(function() {
  function showProject(project) {
    $('.project-content.active').removeClass('active');
    $('.project-content.' + project).addClass('active');
  }

  function initProjects() {
    $('.project-link').each(function(index, link) {
      var $link = $(link),
        project = $link.attr('data-project');

      $link.click(function () {
        showProject(project);
      });

    });
  }

  $(document).ready(function() {
    initProjects();
  });
})();