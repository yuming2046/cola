import log4js from 'log4js';
log4js.configure('./config/log4js.conf.json');

module.exports = (tag) => {
    return log4js.getLogger(tag)
};