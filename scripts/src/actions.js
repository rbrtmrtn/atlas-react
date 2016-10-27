/*
 * action types
 */

export const HANDLE_API_RESPONSE = 'HANDLE_API_RESPONSE'

/*
* other constants
*/

/*
 * action creators
 */

export function handleApiResponse(api, response) {
  return {
    type: HANDLE_API_RESPONSE,
    api: api,
    response: response,
  }
}
