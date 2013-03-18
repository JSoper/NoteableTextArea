Ext.define('MyApp.view.MainView', {
	extend: 'Ext.container.Container',

	height: 300,
	layout: {
		type: 'border'
	},

	initComponent: function() {
		Ext.applyIf(this, {
			items: [ {
				xtype: 'gridpanel',
				region: 'west',
				flex: 1,
				title: 'Noteable',
				store: 'TopicStore',
				plugins: [ Ext.create('Ext.grid.plugin.CellEditing', {
					clicksToEdit: 2
				}) ],
				columns: [ {
					xtype: 'gridcolumn',
					dataIndex: 'topic',
					flex: 1,
					hideable: false,
					text: 'Topics',
					editor: 'textfield'
				} ],
				tools: [ {
					xtype: 'tool',
					type: 'plus'
				}, {
					xtype: 'tool',
					type: 'minus'
				}, {
					xtype: 'tool',
					type: 'save'
				} ]
			}, {
				xtype: 'form',
				region: 'center',
				title: 'Content',
				flex: 4,
				layout: 'fit',
				items: [ {
					xtype: 'textarea', // 'htmleditor',
					name: 'content'
				} ]
			} ]
		});
		this.callParent(arguments);
	}
});