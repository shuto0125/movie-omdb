import React, {
  DependencyList,
  useEffect,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";

// 1回目の処理をスキップする為のhook （使ってない
// https://qiita.com/cohey0727/items/3ced804da0076bd26156

export const useSkip = (effect, deps, times = 1) => {
  const [_times, setTimes] = useState(0);
  useEffect(() => {
    if (_times >= times) {
      return effect();
    } else {
      setTimes(_times + 1);
    }
  }, deps);
};

//  「お知らせ」コンテクスト作成
export const FavContext = createContext(null);

const useFav = () => {
  /*
   * グローバルstate
   */
  const myName = "名前:かいたに from store.jsx";
  const [favMovies, setFavMovies] = useState([]);
  const [countFavMovies, setCountFavMovies] = useState(0);
  /*
   * 機能state
   */

  /*
   * 機能イベントハンドラ
   */

  const providerValue = useMemo(
    () => ({
      myName,
      favMovies,
      setFavMovies,
      countFavMovies,
      setCountFavMovies,
    }),
    [myName, favMovies, setFavMovies, countFavMovies, setCountFavMovies]
  );
  return providerValue;
};

export const FavProvider = (props) => {
  const value = useFav();
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  );
};

export const useFavStore = () => {
  return {
    FavContext: useContext(FavContext),
  };
};
