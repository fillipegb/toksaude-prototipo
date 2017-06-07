w3.includeHTML();
(function() {
    setTimeout(function () {
        var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
        var dots = document.querySelector('.dots');
        var panels = document.querySelector('.panels');

        dynamicTabBar.preventDefaultOnClick = true;

        function updatePanel(index) {
            var activePanel = panels.querySelector('.panel.active');
            if (activePanel) {
                activePanel.classList.remove('active');
            }
            var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
            if (newActivePanel) {
                newActivePanel.classList.add('active');
            }
        }

        dynamicTabBar.listen('MDCTabBar:change', function (t) {
            var dynamicTabBar = t.detail;
            var nthChildIndex = dynamicTabBar.activeTabIndex;

            updatePanel(nthChildIndex);
        });
    },200)
})();

function initGridList() {
    var nodes = document.querySelectorAll('.mdc-grid-list');
    for (var i = 0, node; node = nodes[i]; i++) {
        mdc.gridList.MDCGridList.attachTo(node);
    }
}

var demoWrapper = document.querySelector('.examples');

(function() {
    'use strict';

    var nodes = document.querySelectorAll('.mdc-icon-toggle');
    for (var i = 0, node; node = nodes[i]; i++) {
        mdc.iconToggle.MDCIconToggle.attachTo(node);
    }
})();

(function() {
    var modal = document.querySelector('#mdc-dialog-with-list');
    if(modal !== null) {
        var dialogScrollable = new mdc.dialog.MDCDialog(modal);
        document.querySelector('#dialog-with-list-activation').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
    }
})();

function initInfoModal() {
    var modal = document.querySelector('#mdc-dialog-with-list');
    if(modal !== null) {
        var dialogScrollable = new mdc.dialog.MDCDialog(modal);
        document.querySelector('#dialog-with-list-activation').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#dialog-with-list-activation2').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#dialog-with-list-activation3').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#dialog-with-list-activation4').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
    }else{
        setTimeout(initInfoModal, 50);
    }

}

function initAceiteModal() {
    var modal = document.querySelector('#modalAceite');
    if(modal !== null) {
        var dialogScrollable = new mdc.dialog.MDCDialog(modal);
        document.querySelector('#linkAceite').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite2').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite3').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite4').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite5').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite6').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
        document.querySelector('#linkAceite7').addEventListener('click', function (evt) {
            dialogScrollable.lastFocusedTarget = evt.target;
            dialogScrollable.show();
        });
    }else{
        setTimeout(initAceiteModal, 50);
    }

}

(function() {
    $('.button-collapse').sideNav();
    initInfoModal();
    initAceiteModal();
})();

$(document).ready(function() {
    $('select').material_select();
});
