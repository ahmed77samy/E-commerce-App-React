import AsideCollectionGroup from './AsideCollectionGroup';
import AsideColorGroup from './AsideColorGroup';
import AsideSizeGroup from './AsideSizeGroup';
import AsidePriceGroup from './AsidePriceGroup';

function AsideFilter() {
  return (
    <aside className="aside__filter">
      <form>
        <AsideCollectionGroup />
        <div className="spliter light-2 my-4"></div>
        <AsideColorGroup />
        <div className="spliter light-2 my-4"></div>
        <AsideSizeGroup />
        <div className="spliter light-2 my-4"></div>
        <AsidePriceGroup />
        <div className="spliter light-2 my-4"></div>
        <div className="aside-group">
          <button className="btn__classic mt-5">عرض النتائج</button>
        </div>
      </form>
    </aside>
  );
}

export default AsideFilter;
