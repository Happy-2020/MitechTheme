const loadableReady = require('@loadable/component').loadableReady;
const ReactDOM = require('react-dom')

const transitionDelay = 500

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
}



exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
        ReactDOM.render(element, container, callback);
    });
  };
};


exports.onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
}

exports.registerServiceWorker = () => true
