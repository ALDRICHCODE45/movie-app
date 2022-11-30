import {Get} from '../../../../api'
import { setData, startLoading } from './MovieSlice'


export const getData = () => {

    return async ( dispatch ) => {

        dispatch(startLoading());

        const {results = []} = await Get('3/movie/popular?api_key=247f002c275fdafb31110bc1f0ef58d0')
        console.log(results)
        dispatch(setData(results));

    };

};
