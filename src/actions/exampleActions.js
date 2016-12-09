import { EXAMPLE_ACTIONS }                                      from '~/infrastructure/_ACTION_TYPES';

export function exampleAction(bool) {
    return {
        type: EXAMPLE_ACTIONS.EXAMPLE,
        bool: bool
    };
}
