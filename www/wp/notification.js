/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec');

/**
 * WP(8) Adapter for (Android) enhanced notification API.
 * This avoids 'undefined' errors without specific platform checking.
 */
module.exports = {
    activityStart : function(title, message) {}
    ,

    /**
     * Close an activity dialog
     */
    activityStop : function() {},

    /**
     * Display a progress dialog with progress bar that goes from 0 to 100.
     *
     * @param {String}
     *            title Title of the progress dialog.
     * @param {String}
     *            message Message to display in the dialog.
     */
    progressStart : function(title, message) {},

    /**
     * Close the progress dialog.
     */
    progressStop : function() {},

    /**
     * Set the progress dialog value.
     *
     * @param {Number}
     *            value 0-100
     */
    progressValue : function(value) {}
};
