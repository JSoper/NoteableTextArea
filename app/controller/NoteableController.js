Ext.define('MyApp.controller.NoteableController', {
	extend: 'Ext.app.Controller',

	refs: [ {
		ref: 'mainForm',
		selector: 'form'
	} ],

	// The use of "fetch" is to avoid future name collisions with methods Ext JS
	// generates
	fetchBasicForm: function() {
		return this.getMainForm().getForm();
	},

	fetchCurrentRecord: function() {
		return this.fetchBasicForm().getRecord()
	},

	onPlusToolClick: function(tool, e, options) {
		console.log('onPlusToolClick+', tool.type);
		var string = prompt('Topic Name?');
		if (string) {
			var record = Ext.create('MyApp.model.TopicRecord', {
				topic: string,
				content: ''
			});
			Ext.getStore('TopicStore').add(record);
			this.fetchBasicForm().loadRecord(record);
			Ext.ComponentQuery.query('grid')[0].selModel.select(record);
		}
	},

	onMinusToolClick: function(tool, e, options) {
		Ext.getStore('TopicStore').remove(this.fetchCurrentRecord());
	},

	onSaveToolClick: function(tool, e, options) {
		Ext.getStore('TopicStore').sync();
	},

	onGridpanelSelect: function(selModel, record, index, options) {
		this.fetchBasicForm().loadRecord(record);
	},

	onTextareaChange: function(field, newValue, oldValue, options) {
		this.fetchBasicForm().updateRecord(this.fetchCurrentRecord());
	},

	init: function(application) {
		Ext.getStore('TopicStore').load();
		this.control({
			"tool[type=plus]": {
				click: this.onPlusToolClick
			},
			"tool[type=minus]": {
				click: this.onMinusToolClick
			},
			"tool[type=save]": {
				click: this.onSaveToolClick
			},
			"textarea": {
				change: this.onTextareaChange
			},
			// "htmleditor" : {
			// change : this.onHtmleditorChange
			// },
			"gridpanel": {
				select: this.onGridpanelSelect
			}
		});
	},
});

// onHtmleditorChange : function(field, newValue, oldValue, options) {
// console.log('changeHtml', 'newValue=' + newValue, 'oldValue=' +
// oldValue);
// var basicForm = this.fetchBasicForm()
// var record = fetchCurrentRecord(), //basicForm.getRecord();

// // console.log('changeHtml b4 record.set() topic=',
// // record.get('topic'));
// console.log('changeHtml b4 record.set() content=',
// record.get('content'));
// basicForm.updateRecord(record);
// // record.set(field.name, newValue);
// // console.log('changeHtml aftr record.set() topic=',
// // record.get('topic'));
// console.log('changeHtml aftr record.set() content=',
// record.get('content'));
// },
