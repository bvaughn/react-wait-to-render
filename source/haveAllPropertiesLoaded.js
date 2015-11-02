import values from 'object.values'

/**
 * Helper function for WaitToRenderDecorator and WaitToRenderDecorator.
 * Looks at component properties and decides if the decorated component can be rendered safely.
 */
export default function haveAllPropertiesLoaded (props) {
  const { isLoading } = props

  return isLoading === false || isLoading !== true &&
    values(props).filter(value => value === undefined).length === 0
}
