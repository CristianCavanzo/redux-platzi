import { montserrat } from '@font';
import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <div className={`${montserrat.className} w-9/12 grid m-auto mt-4`}>
            {children}
        </div>
    );
};

export { Layout };
