PGDMP  6                    {         
   cyberrules    16.0    16.0 /    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    32799 
   cyberrules    DATABASE     �   CREATE DATABASE cyberrules WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Romanian_Romania.1250';
    DROP DATABASE cyberrules;
                postgres    false                        3079    32800 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            (           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    32810    echipa    TABLE     �   CREATE TABLE public.echipa (
    echipaid integer NOT NULL,
    categorie character varying(100) NOT NULL,
    isdeleted boolean DEFAULT false,
    nume character varying(100) NOT NULL,
    imagine bytea,
    editia character varying(100)
);
    DROP TABLE public.echipa;
       public         heap    postgres    false            �            1259    32814    echipa_echipaid_seq    SEQUENCE     �   CREATE SEQUENCE public.echipa_echipaid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.echipa_echipaid_seq;
       public          postgres    false    216            )           0    0    echipa_echipaid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.echipa_echipaid_seq OWNED BY public.echipa.echipaid;
          public          postgres    false    217            �            1259    32815    jucatori    TABLE     �  CREATE TABLE public.jucatori (
    jucatorid integer NOT NULL,
    nume character varying(50) NOT NULL,
    prenume character varying(50) NOT NULL,
    post character varying(50) NOT NULL,
    numar integer NOT NULL,
    datanasterii date NOT NULL,
    nationalitate character varying(50) NOT NULL,
    inaltime numeric(5,2) NOT NULL,
    descriere text,
    echipaid integer NOT NULL,
    isdeleted boolean DEFAULT false,
    imagine bytea
);
    DROP TABLE public.jucatori;
       public         heap    postgres    false            �            1259    32821    jucatori_jucatorid_seq    SEQUENCE     �   CREATE SEQUENCE public.jucatori_jucatorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.jucatori_jucatorid_seq;
       public          postgres    false    218            *           0    0    jucatori_jucatorid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.jucatori_jucatorid_seq OWNED BY public.jucatori.jucatorid;
          public          postgres    false    219            �            1259    32822    meciuri    TABLE     �  CREATE TABLE public.meciuri (
    meciid integer NOT NULL,
    datameci timestamp without time zone NOT NULL,
    echipaid integer NOT NULL,
    adversarid integer NOT NULL,
    locatie character varying(100) NOT NULL,
    scorechipa integer,
    scoradversar integer,
    editia character varying(50) NOT NULL,
    tipcampionat character varying(50) NOT NULL,
    linkmeci text,
    isdeleted boolean DEFAULT false,
    isfinished boolean
);
    DROP TABLE public.meciuri;
       public         heap    postgres    false            �            1259    32828    meciuri_meciid_seq    SEQUENCE     �   CREATE SEQUENCE public.meciuri_meciid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.meciuri_meciid_seq;
       public          postgres    false    220            +           0    0    meciuri_meciid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.meciuri_meciid_seq OWNED BY public.meciuri.meciid;
          public          postgres    false    221            �            1259    32829    media    TABLE     �   CREATE TABLE public.media (
    mediaid integer NOT NULL,
    tipmedia character varying(10) NOT NULL,
    stireid integer,
    isdeleted boolean DEFAULT false,
    media bytea
);
    DROP TABLE public.media;
       public         heap    postgres    false            �            1259    32833    media_mediaid_seq    SEQUENCE     �   CREATE SEQUENCE public.media_mediaid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.media_mediaid_seq;
       public          postgres    false    222            ,           0    0    media_mediaid_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.media_mediaid_seq OWNED BY public.media.mediaid;
          public          postgres    false    223            �            1259    32834    sponsori    TABLE     �   CREATE TABLE public.sponsori (
    sponsorid integer NOT NULL,
    numecomplet text NOT NULL,
    linksiteextern text,
    editia character varying(100) NOT NULL,
    isdeleted boolean DEFAULT false,
    imagine bytea
);
    DROP TABLE public.sponsori;
       public         heap    postgres    false            �            1259    32840    sponsori_sponsorid_seq    SEQUENCE     �   CREATE SEQUENCE public.sponsori_sponsorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.sponsori_sponsorid_seq;
       public          postgres    false    224            -           0    0    sponsori_sponsorid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.sponsori_sponsorid_seq OWNED BY public.sponsori.sponsorid;
          public          postgres    false    225            �            1259    32841    stiri    TABLE       CREATE TABLE public.stiri (
    stireid integer NOT NULL,
    datapublicarii date NOT NULL,
    titlu character varying(120) NOT NULL,
    continut text,
    userid integer NOT NULL,
    isinfuture boolean DEFAULT false,
    isdeleted boolean DEFAULT false
);
    DROP TABLE public.stiri;
       public         heap    postgres    false            �            1259    32848    stiri_stireid_seq    SEQUENCE     �   CREATE SEQUENCE public.stiri_stireid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.stiri_stireid_seq;
       public          postgres    false    226            .           0    0    stiri_stireid_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.stiri_stireid_seq OWNED BY public.stiri.stireid;
          public          postgres    false    227            �            1259    32849    users    TABLE     B  CREATE TABLE public.users (
    userid integer NOT NULL,
    username character varying(50) NOT NULL,
    nume character varying(100) NOT NULL,
    prenume character varying(100) NOT NULL,
    passwordhash character varying(64) NOT NULL,
    usertype character varying(20) NOT NULL,
    isdeleted boolean DEFAULT false
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    32853    users_userid_seq    SEQUENCE     �   CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.users_userid_seq;
       public          postgres    false    228            /           0    0    users_userid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;
          public          postgres    false    229            o           2604    32854    echipa echipaid    DEFAULT     r   ALTER TABLE ONLY public.echipa ALTER COLUMN echipaid SET DEFAULT nextval('public.echipa_echipaid_seq'::regclass);
 >   ALTER TABLE public.echipa ALTER COLUMN echipaid DROP DEFAULT;
       public          postgres    false    217    216            q           2604    32855    jucatori jucatorid    DEFAULT     x   ALTER TABLE ONLY public.jucatori ALTER COLUMN jucatorid SET DEFAULT nextval('public.jucatori_jucatorid_seq'::regclass);
 A   ALTER TABLE public.jucatori ALTER COLUMN jucatorid DROP DEFAULT;
       public          postgres    false    219    218            s           2604    32856    meciuri meciid    DEFAULT     p   ALTER TABLE ONLY public.meciuri ALTER COLUMN meciid SET DEFAULT nextval('public.meciuri_meciid_seq'::regclass);
 =   ALTER TABLE public.meciuri ALTER COLUMN meciid DROP DEFAULT;
       public          postgres    false    221    220            u           2604    32857    media mediaid    DEFAULT     n   ALTER TABLE ONLY public.media ALTER COLUMN mediaid SET DEFAULT nextval('public.media_mediaid_seq'::regclass);
 <   ALTER TABLE public.media ALTER COLUMN mediaid DROP DEFAULT;
       public          postgres    false    223    222            w           2604    32858    sponsori sponsorid    DEFAULT     x   ALTER TABLE ONLY public.sponsori ALTER COLUMN sponsorid SET DEFAULT nextval('public.sponsori_sponsorid_seq'::regclass);
 A   ALTER TABLE public.sponsori ALTER COLUMN sponsorid DROP DEFAULT;
       public          postgres    false    225    224            y           2604    32859    stiri stireid    DEFAULT     n   ALTER TABLE ONLY public.stiri ALTER COLUMN stireid SET DEFAULT nextval('public.stiri_stireid_seq'::regclass);
 <   ALTER TABLE public.stiri ALTER COLUMN stireid DROP DEFAULT;
       public          postgres    false    227    226            |           2604    32860    users userid    DEFAULT     l   ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);
 ;   ALTER TABLE public.users ALTER COLUMN userid DROP DEFAULT;
       public          postgres    false    229    228                       2606    32862    echipa echipa_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.echipa
    ADD CONSTRAINT echipa_pkey PRIMARY KEY (echipaid);
 <   ALTER TABLE ONLY public.echipa DROP CONSTRAINT echipa_pkey;
       public            postgres    false    216            �           2606    32866    jucatori jucatori_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.jucatori
    ADD CONSTRAINT jucatori_pkey PRIMARY KEY (jucatorid);
 @   ALTER TABLE ONLY public.jucatori DROP CONSTRAINT jucatori_pkey;
       public            postgres    false    218            �           2606    32868    meciuri meciuri_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.meciuri
    ADD CONSTRAINT meciuri_pkey PRIMARY KEY (meciid);
 >   ALTER TABLE ONLY public.meciuri DROP CONSTRAINT meciuri_pkey;
       public            postgres    false    220            �           2606    32870    media media_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (mediaid);
 :   ALTER TABLE ONLY public.media DROP CONSTRAINT media_pkey;
       public            postgres    false    222            �           2606    32872    sponsori sponsori_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.sponsori
    ADD CONSTRAINT sponsori_pkey PRIMARY KEY (sponsorid);
 @   ALTER TABLE ONLY public.sponsori DROP CONSTRAINT sponsori_pkey;
       public            postgres    false    224            �           2606    32874    stiri stiri_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.stiri
    ADD CONSTRAINT stiri_pkey PRIMARY KEY (stireid);
 :   ALTER TABLE ONLY public.stiri DROP CONSTRAINT stiri_pkey;
       public            postgres    false    226            �           2606    32876    users users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    228            �           2606    32878    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    228            �           2606    32879    jucatori jucatori_echipaid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.jucatori
    ADD CONSTRAINT jucatori_echipaid_fkey FOREIGN KEY (echipaid) REFERENCES public.echipa(echipaid);
 I   ALTER TABLE ONLY public.jucatori DROP CONSTRAINT jucatori_echipaid_fkey;
       public          postgres    false    4735    218    216            �           2606    32884    meciuri meciuri_adversarid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.meciuri
    ADD CONSTRAINT meciuri_adversarid_fkey FOREIGN KEY (adversarid) REFERENCES public.echipa(echipaid);
 I   ALTER TABLE ONLY public.meciuri DROP CONSTRAINT meciuri_adversarid_fkey;
       public          postgres    false    216    4735    220            �           2606    32889    meciuri meciuri_echipaid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.meciuri
    ADD CONSTRAINT meciuri_echipaid_fkey FOREIGN KEY (echipaid) REFERENCES public.echipa(echipaid);
 G   ALTER TABLE ONLY public.meciuri DROP CONSTRAINT meciuri_echipaid_fkey;
       public          postgres    false    220    4735    216            �           2606    32894    media media_stireid_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_stireid_fkey FOREIGN KEY (stireid) REFERENCES public.stiri(stireid);
 B   ALTER TABLE ONLY public.media DROP CONSTRAINT media_stireid_fkey;
       public          postgres    false    222    226    4745            �           2606    32899    stiri stiri_userid_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.stiri
    ADD CONSTRAINT stiri_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);
 A   ALTER TABLE ONLY public.stiri DROP CONSTRAINT stiri_userid_fkey;
       public          postgres    false    4747    228    226           