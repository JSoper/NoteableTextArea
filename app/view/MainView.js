Ext.define( 'MyApp.view.MainView', {
	extend: 'Ext.container.Container',

	height: 400,
	//width: 600,
	layout: { type: 'border' },

	initComponent: function () {
		var me = this;
		Ext.applyIf( me, {
			items: [
				{  xtype: 'gridpanel',
					region: 'west',
					//width: 199,
					flex: 1,
					title: 'Noteable',
					store: 'TopicStore',
					plugins: [Ext.create( 'Ext.grid.plugin.CellEditing', { clicksToEdit: 1 } )],
					columns: [
						{
							xtype: 'gridcolumn',
							dataIndex: 'topic',
							flex: 1,
							hideable: false,
							text: 'Topics',
							editor: 'textfield'
						}
					],
					tools: [
						{  xtype: 'tool', type: 'plus' },
						{  xtype: 'tool', type: 'minus' },
						{  xtype: 'tool', type: 'save' }
					]
				},
				{  xtype: 'form',
					region: 'center',
					title: 'Content',
					flex: 4,
					layout: 'fit',
					items: [
						{  xtype: 'textarea',
//							width: 400,
//							height: 174,
							name: 'content'
						}
					]
				}
			]
		} );
		me.callParent( arguments );
	}
} );
