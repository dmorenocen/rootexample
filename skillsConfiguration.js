// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * A helper class that loads Skills information from configuration.
 */
class SkillsConfiguration {
    constructor() {
        this.skillsData = {};
        // Skill OpenIA
        const skillOpenIA = {
            id: process.env.SkillOpenIAId,
            appId: process.env.SkillOpenIAAppId,
            skillEndpoint: process.env.SkillOpenIAEndPoint
        };
        this.skillsData[skillOpenIA.id] = skillOpenIA;
        // Skill Echo
        const skillEcho = {
            id: process.env.SkillEchoId,
            appId: process.env.SkillEchoAppId,
            skillEndpoint: process.env.SkillEchoEndPoint
        };
        this.skillsData[skillEcho.id] = skillEcho;

        this.skillHostEndpointValue = process.env.SkillHostEndpoint;
        if (!this.skillHostEndpointValue) {
            throw new Error('[SkillsConfiguration]: Missing configuration parameter. SkillHostEndpoint is required');
        }
    }

    get skills() {
        return this.skillsData;
    }

    get skillHostEndpoint() {
        return this.skillHostEndpointValue;
    }
}

module.exports.SkillsConfiguration = SkillsConfiguration;
