Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{ html:'This is version 2'},
    {xtype: 'rallyiterationcombobox'}],
    launch: function() {
        console.log("Console-version 2");
    }
});
