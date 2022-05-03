import { Button, Htag, P, Rating, Tag } from "../components";
import React, {useState} from 'react';
import { Layout, withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";



function Home({menu}: HomeProps) {
  const [rating, setRating] = useState<number>(4);
 
  return (
    <>
      <Htag tag='h1' >Текст</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="xl">Привет</P>
      <Tag color="green">Тег</Tag>
      <Tag size="md" color="gray">Тег</Tag>
      <Tag color="primary">Тег</Tag>
      <Tag color="red">Тег</Tag>
      <Tag>Тег</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>

    </>
  )
}
 

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
       menu,
       firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}