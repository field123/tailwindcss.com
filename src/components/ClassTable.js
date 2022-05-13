import { memo, useEffect, useRef, useState, Fragment } from 'react'
import { isObject } from '@/utils/isObject'
import { castArray } from '@/utils/castArray'
import clsx from 'clsx'
import { Heading } from '@/components/Heading'

function renderProperties(
  properties,
  { filter = () => true, transformValue = (x) => x, indent = 0 } = {}
) {
  return Object.keys(properties).map((property) => {
    if (isObject(properties[property])) {
      return [
        `${property} {`,
        renderProperties(properties[property], { filter, transformValue, indent: indent + 1 }),
        '}',
      ].join('\n')
    } else {
      return castArray(properties[property])
        .filter((value) => filter(property, value, properties))
        .map((value, i) => {
          let transformedValue = transformValue(value)
          let px = /^[\d.]+rem$/.test(transformedValue)
            ? `${parseFloat(transformedValue) * 16}px`
            : null
          return (
            <Fragment key={i}>
              {'  '.repeat(indent)}
              {property}: {transformedValue};
              {px && <span className="text-indigo-400"> {`/* ${px} */`}</span>}
              {'\n'}
            </Fragment>
          )
        })
    }
  })
}

export const ClassTable = memo(
  ({
    utilities = {},
    filterRules = () => true,
    filterProperties,
    preview,
    rowStyle,
    sort = (x) => x,
    transformSelector = (x) => x.replace(/^\./g, '').replace(/\\/g, ''),
    transformProperties = ({ properties }) => properties,
    transformValue,
    custom,
    scroll,
  }) => {
    utilities = Object.fromEntries(Object.entries(utilities).filter(filterRules))
    let classes = Object.keys(utilities)
    let isScrollable = scroll || classes.length > 12
    let isCollapsable = classes.length > 10
    let [isCollapsed, setIsCollapsed] = useState(isCollapsable)
    let ref = useRef()
    let isInitial = useRef(true)

    useEffect(() => {
      if (isInitial.current) {
        isInitial.current = false
        return
      }
      if (isCollapsed) {
        ref.current.scrollIntoView(true)
      }
    }, [isCollapsed])

    return (
      <div ref={ref} className="mt-10 relative">
        <Heading level={2} id="class-reference" className="relative scroll-mt-[var(--scroll-mt)]">
          <span className="sr-only">Quick reference</span>
        </Heading>
        <div
          className={clsx(
            'overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-zinc-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-zinc-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-zinc-500/[0.16] dark:scrollbar-thumb:!bg-zinc-500/50',
            isCollapsed && 'max-h-96',
            !isScrollable && isCollapsed && 'lg:max-h-[none]',
            isScrollable && 'supports-scrollbars:pr-2 lg:max-h-96'
          )}
        >
          {custom || (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-zinc-700 bg-white p-0 dark:bg-zinc-900 dark:text-zinc-300">
                    <div className="py-2 pr-2 border-b border-zinc-200 dark:border-zinc-400/20">
                      Class
                    </div>
                  </th>
                  <th
                    className={clsx(
                      'sticky z-10 top-0 text-sm leading-6 font-semibold text-zinc-700 bg-white p-0 dark:bg-zinc-900 dark:text-zinc-300',
                      {
                        'hidden sm:table-cell': preview,
                      }
                    )}
                  >
                    <div
                      className={clsx(
                        'py-2 pl-2 border-b border-zinc-200 dark:border-zinc-400/20',
                        { 'pr-2': preview }
                      )}
                    >
                      Properties
                    </div>
                  </th>
                  {preview && (
                    <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-zinc-700 bg-white p-0 dark:bg-zinc-900 dark:text-zinc-300">
                      <div className="py-2 pl-2 border-b border-zinc-200 dark:border-zinc-400/20">
                        <span className="sr-only">Preview</span>&nbsp;
                      </div>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="align-baseline">
                {sort(classes).map((utility, i) => {
                  let selector = utility
                  let properties = { ...utilities[selector] }

                  return (
                    <tr key={utility} style={rowStyle ? rowStyle({ css: properties }) : undefined}>
                      <td
                        tranzinc="no"
                        className={clsx(
                          'py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400',
                          {
                            'border-t border-zinc-100 dark:border-zinc-400/10': i !== 0,
                          }
                        )}
                      >
                        {transformSelector(selector)}
                      </td>
                      <td
                        tranzinc="no"
                        className={clsx(
                          'py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300',
                          {
                            'border-t border-zinc-100 dark:border-zinc-400/10': i !== 0,
                            'hidden sm:table-cell sm:pr-2': preview,
                          }
                        )}
                      >
                        {renderProperties(transformProperties({ selector, properties }), {
                          filter: filterProperties,
                          transformValue,
                        })}
                      </td>
                      {preview &&
                        preview(properties, {
                          utility,
                          className:
                            i === 0 ? '' : 'border-t border-zinc-100 dark:border-zinc-400/10',
                        })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
          <div className="sticky bottom-0 h-px -mt-px bg-zinc-200 dark:bg-zinc-400/20" />
        </div>
        {isCollapsable && (
          <div
            className={clsx(
              'inset-x-0 flex justify-center lg:hidden',
              isCollapsed
                ? '-mt-9 relative'
                : 'mt-4 sticky bottom-[calc(1rem+env(safe-area-inset-bottom,0))]'
            )}
          >
            <div
              className={clsx(
                'absolute inset-x-0 bg-gradient-to-t from-white dark:from-zinc-900',
                isCollapsed
                  ? '-top-8 bottom-0'
                  : '-top-4 bottom-[calc(-1*(1rem+env(safe-area-inset-bottom,0)))]'
              )}
            />
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="relative text-sm font-semibold text-zinc-900 bg-white py-2 px-4 rounded-full ring-1 ring-zinc-900/10 shadow-sm dark:bg-zinc-800 dark:text-zinc-200 dark:highlight-white/5"
            >
              {isCollapsed ? 'Show all classes' : 'Show fewer classes'}
            </button>
          </div>
        )}
      </div>
    )
  }
)
