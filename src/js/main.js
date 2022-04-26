var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                   '<a href="{{cover}}" >' +
                      '<img class="reports_cover" src="{{cover}}"/ >'+
                       '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h5 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}}({{file_size}}{{file_type}})</a>' +
                            '</h5>' +
                            
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();
