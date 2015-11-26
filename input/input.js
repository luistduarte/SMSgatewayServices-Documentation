var com = {
	"qmino":{
		"miredot":{
		},
	},
};
com.qmino.miredot.restApiSource = {
	"projectName":"SMSgwServices",
	"projectVersion":"1.0-SNAPSHOT",
	"projectTitle":"SMSgwServices-1.0-SNAPSHOT",
	"buildSystem":"maven 3",
	"miredotVersion":"1.6.2",
	"miredotRevision":"f89b750ce8b9",
	"jsonDocEnabled":false,
	"jsonDocHidden":true,
	"singlePage":false,
	"hideLogoOnTop":false,
	"dateOfGeneration":"2015-11-26 17:09:45",
	"validLicense":true,
	"licenseErrorMessage":null,
	"licenseType":"FREE",
	"allowUsageTracking":true,
	"licenseHash":"-2385878683958733885",
};

com.qmino.miredot.restApiSource.tos = {
};
com.qmino.miredot.restApiSource.enums = {
};
com.qmino.miredot.restApiSource.interfaces = [
	{
		"beschrijving":"Service for Composer deliver response for a request from Client, parameter content is a Json composed by response(body field) and status of request, Sender receives notifications if they are enabled",
		"url":"/outbound/{requestid}/response",
		"http":"POST",
		"title":"Service for Composer deliver response for a request from Client, parameter content is a Json composed by response(body field) and status of request, Sender receives notifications if they are enabled",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
			"application/json",
		],
		"produces":[
			"application/json",
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"",
		},
		"statusCodes":[
		],
		"hash":"-2035118557",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
				{
					"name":"requestid",
					"typeValue":{
						"type":"simple",
						"typeValue":"number",
					},
					"comment":"requestid",
					"jaxrs":"PATH",
				},
			],
			"QUERY":[
			],
			"BODY":[
				{
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"json composed by response(body field) and status of request",
					"jaxrs":"BODY",
				},
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"One Composer can register their service, for that need to give their service Url, and their name",
		"url":"/subscrive/service",
		"http":"PUT",
		"title":"One Composer can register their service, for that need to give their service Url, and their name",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
			"application/json",
		],
		"produces":[
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
		},
		"statusCodes":[
		],
		"hash":"2103925765",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
			],
			"QUERY":[
			],
			"BODY":[
				{
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"json composed by serviceurl and name",
					"jaxrs":"BODY",
				},
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"Service for receive message from Kannel, receive senderAddress and also text Message as parameter name text",
		"url":"/outbound/{senderAddress}/requests",
		"http":"GET",
		"title":"Service for receive message from Kannel, receive senderAddress and also text Message as parameter name text",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
		],
		"produces":[
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"String MessageDelivered for senderAddress",
		},
		"statusCodes":[
		],
		"hash":"2094887278",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
				{
					"name":"senderAddress",
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"request set from",
					"jaxrs":"PATH",
				},
			],
			"QUERY":[
			],
			"BODY":[
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"One Composer can add regex rules for our service forward messages for their service, for that need to give url of their service and list of rules",
		"url":"/subscrive/service/rule",
		"http":"PUT",
		"title":"One Composer can add regex rules for our service forward messages for their service, for that need to give url of their service and list of rules",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
			"application/json",
		],
		"produces":[
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
		},
		"statusCodes":[
		],
		"hash":"-2009900793",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
			],
			"QUERY":[
			],
			"BODY":[
				{
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"json composed by url and list of rules",
					"jaxrs":"BODY",
				},
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"Service just for check rules for one composer url",
		"url":"/subscrive/service/check",
		"http":"POST",
		"title":"Service just for check rules for one composer url",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
			"application/json",
		],
		"produces":[
			"application/json",
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"List of rules for selected service",
		},
		"statusCodes":[
		],
		"hash":"1334324750",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
			],
			"QUERY":[
			],
			"BODY":[
				{
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"json with just one field (url)",
					"jaxrs":"BODY",
				},
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"Service for enable or disable notifications",
		"url":"/outbound/{senderAddress}/subscriptions",
		"http":"GET",
		"title":"Service for enable or disable notifications",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
		],
		"produces":[
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"String with status of request, or Notifications Enabled, Notifications Disabled or Number Never Used",
		},
		"statusCodes":[
		],
		"hash":"36843941",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
				{
					"name":"senderAddress",
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"request sent from..",
					"jaxrs":"PATH",
				},
			],
			"QUERY":[
			],
			"BODY":[
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"Service where client can check status of their last request",
		"url":"/outbound/{senderAddress}/requests/{requestId}/status",
		"http":"GET",
		"title":"Service where client can check status of their last request",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
		],
		"produces":[
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"status of last request",
		},
		"statusCodes":[
		],
		"hash":"1776183366",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
				{
					"name":"senderAddress",
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"message sent from",
					"jaxrs":"PATH",
				},
				{
					"name":"requestId",
					"typeValue":{
						"type":"simple",
						"typeValue":"string",
					},
					"comment":"at this case requestId is a string called last when request comes from kannel, requestId can be a int too",
					"jaxrs":"PATH",
				},
			],
			"QUERY":[
			],
			"BODY":[
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
	{
		"beschrijving":"Just one get For Test API",
		"url":"/outbound/",
		"http":"GET",
		"title":"Just one get For Test API",
		"tags":[
			
		],
		"authors":[
			"Luis Duarte",
		],
		"compressed":false,
		"deprecated":false,
		"consumes":[
		],
		"produces":[
			"application/json",
		],
		"roles":[
		],
		"rolesAllowed":null,
		"permitAll":false,
		"output":{
			"typeValue":{
				"type":"simple",
				"typeValue":"string",
			},
			"comment":"String SMS API RUNNING!!!!",
		},
		"statusCodes":[
		],
		"hash":"-778117706",
		"responseHeaders":{
			"headers":[
			],
			"customHeaders":[
			],
		},
		"inputs":{
			"PATH":[
			],
			"QUERY":[
			],
			"BODY":[
			],
			"HEADER":[
			],
			"COOKIE":[
			],
			"FORM":[
			],
			"MATRIX":[
			],
		},
	},
];
com.qmino.miredot.projectWarnings = [
	{
		"category":"JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description":"Missing return type documentation",
		"failedBuild":"false",
		"interface":null,
		"entity":null,
	},
	{
		"category":"JAXRS_MISSING_PRODUCES",
		"description":"Interface returns a result, but does not specify a Produces value.",
		"failedBuild":"false",
		"interface":null,
		"entity":null,
	},
	{
		"category":"JAXRS_MISSING_PRODUCES",
		"description":"Interface returns a result, but does not specify a Produces value.",
		"failedBuild":"false",
		"interface":null,
		"entity":null,
	},
	{
		"category":"JAXRS_MISSING_PRODUCES",
		"description":"Interface returns a result, but does not specify a Produces value.",
		"failedBuild":"false",
		"interface":null,
		"entity":null,
	},
];
com.qmino.miredot.processErrors = [
];

