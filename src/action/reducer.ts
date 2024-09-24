import {Data, DataInput} from "../components/types";

type ActionType = 'add' | 'delete' | 'update' | 'toggle'

type Action = {
    type: ActionType;
    id: number;
    data?: DataInput
}

/**
 * Separate concerns using Reducer pattern.
 */
export default function todoReducer(state: Data[], action: Action): Data[] {
    const {type, id, data} = action;
    switch (type) {
        case 'add': {
            return [...state, {
                id,
                title: data?.content!,
                content: data?.content!,
                createdAt: new Date()
            }];
        }

        case 'delete': {
            return state.filter(s => s.id !== action.id)
        }

        case 'update': {
            return state.map(s => {
                if (s.id === id) {
                    return {
                        ...s,
                        ...data
                    }
                }

                return s;
            })
        }

        case 'toggle': {
            return state.map(s => {
                if (s.id === id) {
                    return {
                        ...s,
                        finishedAt: s.finishedAt ? undefined : new Date()
                    }
                }

                return s;
            })
        }

        default: {
            throw Error('Unknown action: ' + type)
        }
    }
}