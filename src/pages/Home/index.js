import React, { useState, useEffect, useRef } from "react";

import { api } from "../../services/api";
import { useLocation, useHistory } from "react-router-dom";

import Carousel from "../../components/Carousel";
import SwitchTheme from "../../components/SwitchTheme";

import * as S from "./styles";

function Home() {
  const { search } = useLocation();
  const history = useHistory();

  const [animesSearch, setAnimesSearch] = useState([]);

  const [animesPopular, setAnimesPopular] = useState([]);

  const [animesLatest, setAnimesLatest] = useState([]);

  const searchValueRef = useRef(null);

  useEffect(() => {
    async function getMorePopular() {
      try {
        const { data } = await api.get("/api-animesbr-10.php?populares");
        setAnimesPopular(data.slice(0, 15));
        /* console.log(data.slice(0, 15)); */
      } catch (err) {
        console.log("Err on get more popular", err);
      }
    }

    async function getRecentReleases() {
      try {
        const { data } = await api.get("/api-animesbr-10.php?latest");
        setAnimesLatest(data.slice(0, 15));
        /*  console.log(data.slice(0, 15)); */
      } catch (err) {
        console.log("Err on get recents releases", err);
      }
    }

    async function getResultsOfAnimes() {
      await getMorePopular();
      await getRecentReleases();
    }

    getResultsOfAnimes();
  }, []);

  useEffect(() => {
    async function searchAnimes() {
      try {
        const query = search.replace("?", "").replace(/[^a-zA-Zs]/g, "_");
        if (query !== "") {
          const { data } = await api.get(`/api-animesbr-10.php?letra=${query}`);

          if (Array.isArray(data)) {
            setAnimesSearch(data.slice(0, 20));
          }

          if (data === null) {
            setAnimesSearch([]);
            alert("Nenhum resultado encontrado...");
          }

          console.log(data);
        } else {
          setAnimesSearch([]);
        }
      } catch (err) {
        console.log("Err on search anime", err);
      }
    }

    searchAnimes();
  }, [search]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchValueRef.current.value.trim()) {
      return alert("Digite algo para buscar");
    }

    history.replace({
      pathname: "/",
      search: searchValueRef.current.value,
    });
  }

  function clearResults() {
    searchValueRef.current.value = "";

    history.replace({
      pathname: "/",
      search: "",
    });
  }

  function goToAnimePage(id) {
    history.push(`/anime/${id}`);
  }

  function handleClickEpisode(animeId, videoId) {
    history.push({
      pathname: `/anime/${animeId}/episode/${videoId}`,
    });
  }

  return (
    <S.Container>
      <SwitchTheme />
      <S.Page>
        <S.Hero>
          {/*  <img src={MooveTvLogo} alt="MooveTV" /> */}
          <h2>Assista aos melhores animes</h2>
          <span>Pesquise por algum título</span>
        </S.Hero>
        <S.SearchBox onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar animes..."
            ref={searchValueRef}
          />
          <button type="submit">Buscar</button>
        </S.SearchBox>
        {search && (
          <S.Clear onClick={clearResults}>
            <span>Limpar resultados de busca</span>
          </S.Clear>
        )}
        {animesSearch?.length > 0 ? (
          <S.Results>
            <S.TitleCategory>
              <h2>{animesSearch.length} resultados de busca</h2>
            </S.TitleCategory>
            <S.SliderContainer>
              <Carousel>
                {animesSearch?.map((item, index) => (
                  <S.SliderItem
                    key={`latest-${index}-${item.id}`}
                    onClick={() => goToAnimePage(item.id)}
                  >
                    <S.SliderCard
                      bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                    >
                      <span>{item.category_name}</span>
                    </S.SliderCard>
                  </S.SliderItem>
                ))}
              </Carousel>
            </S.SliderContainer>
          </S.Results>
        ) : (
          <S.Results>
            <S.TitleCategory>
              <h2>Populares</h2>
            </S.TitleCategory>
            <S.SliderContainer>
              <Carousel>
                {animesPopular?.map((item, index) => (
                  <S.SliderItem
                    key={`latest-${index}-${item.id}`}
                    onClick={() => goToAnimePage(item.id)}
                  >
                    <S.SliderCard
                      bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                    >
                      <span>{item.category_name}</span>
                    </S.SliderCard>
                  </S.SliderItem>
                ))}
              </Carousel>
            </S.SliderContainer>

            <S.TitleCategory>
              <h2>Lancamentos</h2>
            </S.TitleCategory>
            <S.SliderContainer>
              <Carousel>
                {animesLatest?.map((item, index) => (
                  <S.SliderItem
                    key={`latest-${index}-${item.video_id}`}
                    onClick={() =>
                      handleClickEpisode(item.category_id, item.video_id)
                    }
                  >
                    <S.SliderCard
                      bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                    >
                      <span>{item.title}</span>
                    </S.SliderCard>
                  </S.SliderItem>
                ))}
              </Carousel>
            </S.SliderContainer>
          </S.Results>
        )}
      </S.Page>
    </S.Container>
  );
}

export default Home;
