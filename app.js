
Ext.Loader.setConfig({ enabled: true });

Ext.application({
    models: [ 'TopicRecord'],
	stores: [ 'TopicStore'],
	views: [ 'MainView'],
	autoCreateViewport: true,
    name: 'MyApp',
    controllers: [ 'NoteableController']
});
