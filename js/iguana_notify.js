    // IGUANA HIVE NOTIFICATION

    // Include this file on a page when you have Sweet Alert 2 installed 
    // to notify users that you would like them to help fix the page on Github. 
    // This works for any site using Github Pages.
    
    
    var repo = 'TaoFruit/taovillages'; // Update the values below to include the Organization and Repo on Github
    var curPage = document.URL.split('/').pop(); // Automatically gets the name of the file.  Currently doesn't work on sub-domains or subfolders.

    Swal.fire({
        title: '<strong>Disclaimer</strong>&nbsp;&nbsp;<i class="fa fa-info-circle" aria-hidden="true"></i>',
        icon: 'info',
        html:
            'The photos and writing on this page are not accurate.<br>The layout is also not correct.<br><br> ' +
            'You may contribute by editing the file directly on Github ' +
            'if you would like to help.' +
            '<hr>' +
            '<a href="https://lab.github.com/" target="_blank"><small>Don\'t know Github? Get Training here.</small></a>',
        footer: '<a href="https://iguanahive.com" target="_blank">Join Our Content Creator Community <img src="images/logo/iguanahive.svg" width="120px"></a>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-github" aria-hidden="true"></i> Edit on Github',
        cancelButtonText:
            'Hide Notification'
        }).then((result) => {
            if (result.value) {
                var editPage = 'https://github.com/' + repo + '/blob/gh-pages/' + curPage;
                window.open(editPage);
            }
        })