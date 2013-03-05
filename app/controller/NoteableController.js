Ext.define( 'MyApp.controller.NoteableController', {
	extend: 'Ext.app.Controller',

	refs: [ {  ref: 'mainForm', selector: 'form' } ],

	init: function ( application ) {
		Ext.getStore( 'TopicStore' ).load();
		this.control( {
			"tool[type=plus]": { click: this.onPlusToolClick },
			"tool[type=minus]": { click: this.onMinusToolClick },
			"tool[type=save]": { click: this.onSaveToolClick },
			"textarea": { change: this.onTextareaChange },
			"gridpanel": { select: this.onGridpanelSelect }
		} );
	},

	// The use of "fetch" is to avoid future name collisions with methods Ext JS generates
	fetchBasicForm: function () {return this.getMainForm().getForm(); },

	fetchCurrentRecord: function () {return this.fetchBasicForm().getRecord()},

	onPlusToolClick: function ( tool, e, options ) {
		var string = prompt( 'Topic Name?' );
		if ( string ) {
			var record = Ext.create( 'MyApp.model.TopicRecord', {topic: string, content: ''} );
			Ext.getStore( 'TopicStore' ).add( record );
			this.fetchBasicForm().loadRecord( record );

			Ext.ComponentQuery.query( 'grid' )[0].selModel.select( record );
		}
	},

	onMinusToolClick: function ( tool, e, options ) {
		Ext.getStore( 'TopicStore' ).remove( this.fetchCurrentRecord() );
	},

	onSaveToolClick: function ( tool, e, options ) {
		Ext.getStore( 'TopicStore' ).sync();
	},

	onTextareaChange: function ( field, newValue, oldValue, options ) {
		this.fetchBasicForm().updateRecord( this.fetchCurrentRecord() );
	},

	onGridpanelSelect: function ( selModel, record, index, options ) {
		this.fetchBasicForm().loadRecord( record );
	}
} );
