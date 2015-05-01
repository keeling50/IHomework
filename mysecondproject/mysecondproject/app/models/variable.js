exports.definition = {
	config: {
 "columns": {
			name: 'TEXT',
			nickname: 'TEXT',
			fighterId: 'TEXT PRIMARY KEY'
		},
 "adapter": {
 "type": "sql",
 "collection_name": "variable",
 "idAttribute": "fighterId"
		}
	}
};