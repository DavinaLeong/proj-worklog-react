import uuid from 'uuid/v4';

import daytypeData from './daytype.data';

const DaytypeModel = {};
const data = daytypeData;

/**
 * Returns the column information of the DayType table.
 */
DaytypeModel.schema = {
    tableName: 'daytypes',
    columns: {
        uuid: { name: 'uuid', type: 'string' },
        label: { name: 'label', type: 'string' },
        icon: { name: 'icon', type: 'string' },
        value: { name: 'value', type: 'string' },
        createdAt: { name: 'createdAt', type: 'datetime' },
        updatedAt: { name: 'updatedAt', type: 'datetime' },
        
        array: ['uuid', 'label', 'icon', 'value',
            'createdAt', 'updateAt']
    }
};

/**
 * Retrieve all DayTypes
 */
DaytypeModel.findAll = function() {
    return data;
}

/**
 * Retrieve a DayType by its uuid.
 * @param {string} uuid 
 */
DaytypeModel.findByUuid = function(uuid) {
    if (! uuid || typeof uuid !== 'string') {
        // TODO: Proper error-handling
        return null;
    }

    return data.find((dayType) => {
        return dayType.uuid === uuid;
    });
}

/**
 * Retrieve a DayType by its other fields.
 * @param {string|number} value 
 * @param {string|number} key 
 */
DaytypeModel.findOne = function(value, key) {
    if (! DaytypeModel.schema.columns.array.includes(key)) {
        // TODO: Proper error-handling
        console.error(`Column '${key} doesn't exist in DayTypes table.`);
        return null;
    }

    return data.find((element) => {
        return element[key] === value;
    });
}

export default DaytypeModel;