import { InfoList } from './components/SPGetter';

export default class MockHttpClient  {

    private static _items: InfoList[] = [{ SupportNumber: 'MockNr', Id: '1', SupportEmail: 'MockEmail', SkypeLink: 'MockSkypeLink', ServicePortalLink: 'MockPortalLink' },
                                        { SupportNumber: 'MockNr', Id: '2', SupportEmail: 'MockEmail', SkypeLink: 'MockSkypeLink', ServicePortalLink: 'MockPortalLink' },
                                        { SupportNumber: 'MockNr', Id: '3', SupportEmail: 'MockEmail', SkypeLink: 'MockSkypeLink', ServicePortalLink: 'MockPortalLink' }];

    public static get(): Promise<InfoList[]> {
    return new Promise<InfoList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}