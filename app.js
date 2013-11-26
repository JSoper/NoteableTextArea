Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	// models: [ 'TopicRecord' ],
	stores: [ 'TopicStore' ],
	autoCreateViewport: true,
	name: 'MyApp',
	controllers: [ 'NoteableController' ]
});