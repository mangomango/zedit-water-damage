/* global ngapp, xelib */
registerPatcher({
    info: info,
    gameModes: [xelib.gmTES5, xelib.gmSSE],
    settings: {
        label: 'Water fix',
	hide: true
    },
    execute: {
        process: [{
            load: () => ({
                signature: 'WATR'
            }),
            patch: function(record, helpers, settings, locals) {
                helpers.logMessage(`Patching ${xelib.LongName(record)}`);
                if (!xelib.GetFlag(record, 'FNAM - Flags', 'Causes Damage')) {
                    helpers.logMessage(`Adding "causes damage flag" to ${xelib.LongName(record)}`);
                    xelib.SetFlag(record, 'FNAM - Flags', 'Causes Damage', true);
                }
            }
        }]
    }
});
