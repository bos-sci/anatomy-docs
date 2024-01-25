import { NavItemSecondary } from '@boston-scientific/anatomy-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { slugify } from 'shared/helpers';
import { IdLookupEntry, IdLookupProperties } from 'shared/types/docs';

const useNavItems = (lookupEntries: IdLookupEntry, pathEnd: string) => {
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const basePath = pathParts.slice(0, pathParts.indexOf(pathEnd) + 1).join('/');

    const groupedItems: { [key: string]: IdLookupProperties[] } = {
      _ungrouped: []
    };

    Object.keys(lookupEntries).forEach((entry) => {
      const item = lookupEntries[entry];
      if (item.groupName) {
        if (groupedItems[item.groupName]) {
          groupedItems[item.groupName].push(item);
        } else {
          groupedItems[item.groupName] = [item];
        }
      } else {
        groupedItems._ungrouped.push(item);
      }
    });

    const navItems: NavItemSecondary[] = groupedItems._ungrouped.map((item) => ({
      text: item.name,
      to: basePath + '/' + slugify(item.name)
    }));

    delete groupedItems['_ungrouped'];

    const groups = Object.keys(groupedItems).map((entry) => ({
      text: entry,
      children: groupedItems[entry].map((item) => ({
        text: item.name,
        to: basePath + '/' + item.group + '/' + slugify(item.name)
      }))
    }));

    const sortedItems = navItems.concat(groups).sort((a, z) => (a.text > z.text ? 1 : -1));
    setNavItems(sortedItems);
  }, [location.pathname, lookupEntries, pathEnd]);

  return navItems;
};

export default useNavItems;
