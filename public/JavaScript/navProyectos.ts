import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

document.addEventListener('DOMContentLoaded', element => {
    const div = document.querySelector("#tabContentExample");
    const loader = document.querySelector(".spinner");
    div.style.display = 'block';

    loader.classList.remove('spinner');

    const tabsElement: HTMLElement = document.getElementById('tabs-example');

    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: TabItem[] = [
        {
            id: 'JavaScript',
            triggerEl: document.querySelector('#javaScrip-tab'),
            targetEl: document.querySelector('#javaScript-targetEl'),
        },
        {
            id: 'cSharp',
            triggerEl: document.querySelector('#cSharp-tab'),
            targetEl: document.querySelector('#cSharp-targetEl'),
        }
    ];

    const options: TabsOptions = {
        defaultTabId: 'JavaScript',
        activeClasses:
            'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses:
            'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700dark:hover:text-gray-300',
        onShow: () => {
            console.log('tab is shown');
        },
    };

    const instanceOptions: InstanceOptions = {
        id: 'tabs-example',
        override: true
    };

    const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
})


