Ext.define('MyApp.store.TopicStore', {
	extend: 'Ext.data.Store',
	requires: 
		       [ 'MyApp.model.TopicRecord',
	             'Ext.data.proxy.LocalStorage' 
	           ],
	storeId: 'TopicStore',
	model: 'MyApp.model.TopicRecord',
	proxy: {
		type: 'localstorage',
		id: 'NoteableTextArea.store.TopicStore'
	}
});
