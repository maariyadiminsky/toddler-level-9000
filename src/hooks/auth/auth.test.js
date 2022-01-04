import { renderHook } from '@testing-library/react-hooks';

import { Providers } from '../../tests/utils';
import { useAuth } from './';

describe('auth custom hooks', () => {
    describe('useAuth', () => {
        it('return variables and methods from Auth0', () => {
            const { result: { current }} = renderHook(() => useAuth(), { wrapper: Providers });

            const input = current;

            const output1 = 'isAuthenticated';
            const output2 = 'logout';

            expect(input).toHaveProperty(output1);
            expect(input).toHaveProperty(output2);
        });
    });
});