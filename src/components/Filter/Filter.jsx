
import "./Filter.css"

function Filter({active, curFilter, updateFilter, listFilter, resetFilter, category }) {

    const onFiltersChange = (event) => {
        const newFilter = event.target.value
        updateFilter(newFilter)
      }

      const COMPLETE_FILTER = {
        CreamFace: "creamFace",
        MaskFace: "maskFace",
        PowderFace: "powderFace",
        TonicFace: "tonicFace",
        CreamBody: "creamBody",
        OilBody: "oilBody",
        ScrubBody: "scrubBody",
        All: "all"
      }

	return (
        <section className="filter">
            <div className={`container__filter ${active}`}>
                <div className="filter__list">
                <ul className={`filter__category ${ category == 'body care' ? "inactive" : "" }`}>
                    <h3 className="filter__title">Уход для лица</h3>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.CreamFace}
                        type="radio"
                        name={COMPLETE_FILTER.CreamFace}
                        value={COMPLETE_FILTER.CreamFace}
                        onChange={onFiltersChange}
                        id="creamFace" />
                        <label htmlFor="creamFace">Крема</label>
                    </li>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.MaskFace}
                        type="radio"
                        name={COMPLETE_FILTER.MaskFace}
                        value={COMPLETE_FILTER.MaskFace}
                        onChange={onFiltersChange}
                        id="maskFace" />
                        <label htmlFor="maskFace">Маски</label>
                    </li>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.PowderFace}
                        type="radio"
                        name={COMPLETE_FILTER.PowderFace}
                        value={COMPLETE_FILTER.PowderFace}
                        onChange={onFiltersChange}
                        id="powderFace" />
                        <label htmlFor="powderFace">Пудры</label>
                    </li>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.TonicFace}
                        type="radio"
                        name={COMPLETE_FILTER.TonicFace}
                        value={COMPLETE_FILTER.TonicFace}
                        onChange={onFiltersChange}
                        id="tonicFace" />
                        <label htmlFor="tonicFace">Тоники</label>
                    </li>
                </ul>
                <ul className={`filter__category ${ category == 'facial care' ? "inactive" : "" }`}>
                    <h3 className="filter__title">Уход для тела</h3>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.CreamBody}
                        type="radio"
                        name={COMPLETE_FILTER.CreamBody}
                        value={COMPLETE_FILTER.CreamBody}
                        onChange={onFiltersChange}
                        id="creamBody" />
                        <label htmlFor="creamBody">Крема</label>
                    </li>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.OilBody}
                        type="radio"
                        name={COMPLETE_FILTER.OilBody}
                        value={COMPLETE_FILTER.OilBody}
                        onChange={onFiltersChange}
                        id="oilBody" />
                        <label htmlFor="oilBody">Масла</label>
                    </li>
                    <li className="filter__subcategory">
                        <input
                        checked={curFilter === COMPLETE_FILTER.ScrubBody}
                        type="radio"
                        name={COMPLETE_FILTER.ScrubBody}
                        value={COMPLETE_FILTER.ScrubBody}
                        onChange={onFiltersChange}
                        id="scrubBody" />
                        <label htmlFor="scrubBody">Скрабы</label>
                    </li>
                </ul>
                </div>
                <div className="filter__btns">
                    <button onClick={listFilter} className="btn btn-filter">Применить</button>
                    <button onClick={resetFilter} className="btn btn-filter">Сбросить</button>
                </div>
                </div>
        </section>
	)
}
export default Filter
