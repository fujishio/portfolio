import type { ReactNode } from 'react'

export type Work = {
  id: string
  title: string
  thumbnail: string
  category: 'games' | 'others'
  detail: ReactNode
}

export const works: Work[] = [
  {
    id: 'birdol',
    title: 'Birdol March',
    thumbnail: '/image/birdol.jpg',
    category: 'games',
    detail: (
      <div className="space-y-6">
        <img src="/image/birdolBig.jpg" alt="Birdol March" className="w-full rounded-lg" />
        <h2 className="text-2xl font-bold text-greek-blue">Birdol March / バードル・マーチ</h2>
        <p className="text-center text-blue-eyes font-bold text-lg">野鳥×アイドル＝バードル！！</p>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">制作背景</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">早稲田祭2021に向けて、デジタル創作サークル「経営情報学会(MIS.W)」の有志（チーム名：鳥企画）が作成した、iOS/Android対応ソシャゲ風育成ゲーム『バードル・マーチ』です。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作期間</th>
              <td className="py-2">2021年5月〜11月 (約6ヶ月間)</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">使用技術</th>
              <td className="py-2">
                自身: Adobe Photoshop, CLIP STUDIO, Adobe Premiere Pro, HackMD, Slack<br />
                チーム: Unity (C#), Git, Go, Cubase, Blender
              </td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">担当範囲</th>
              <td className="py-2">企画立案、プロジェクトリーダー（マネジメント全般）、CG責任者</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">チーム構成</th>
              <td className="py-2">計32名 (プログラマー10名、イラストレーター15名、シナリオ5名、音楽2名)</td>
            </tr>
          </tbody>
        </table>

        <p className="font-bold">
          Apple Store、Google Play Store、Microsoft Storeでの配布&オンラインサービスを終了し、現在は
          <a href="https://github.com/Project-Birdol/birdol" target="_blank" rel="noopener noreferrer" className="text-greek-blue underline hover:text-blue-eyes transition-colors">Github</a>
          でオフライン版を配布中です！
        </p>

        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/yk2nnOtywMk"
            title="Birdol March PV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">プロジェクトの工夫</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">マネジメント</th>
              <td className="py-2">学業が最優先のため、最悪リーダーとテックリーダーだけで展示できるよう優先順位をつけて作業を進めました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">プログラム</th>
              <td className="py-2">プログラム担当がサーバーとの通信機能を学ぶため、ユーザー管理機能を実装しました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">CG管理</th>
              <td className="py-2">各CGスタッフのスケジュールや作業可能量がバラバラのため、キャラクター数を可変にして調整できるようにしました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">プラットフォーム</th>
              <td className="py-2">これまで開発したゲームはPCのみでしたが、みんなでスマートフォンで遊べるゲームを目指し、アプリストアへのリリースを目標としました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">UI/UX</th>
              <td className="py-2">手でキャラクターを触って動かす面白さが重要と考え、成長パートとライブ（実戦）パート両方で、キャラクターをドラッグアンドドロップして動かすUIを採用しました。</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'hulogen',
    title: 'Hulog:N',
    thumbnail: '/image/hulogen.jpg',
    category: 'games',
    detail: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-greek-blue">Hulog:N</h2>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">制作背景</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">MIS.W Game Jam 2020にて、3日間で制作した横スクロールアクションゲームです。TypeScriptでブラウザゲームが作りたい人、重めのシナリオが好きな人、美少女イラストが描きたい人の想いが合致して誕生しました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">担当範囲</th>
              <td className="py-2">イラスト（リード）、デザイン、シナリオ</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">開発状況</th>
              <td className="py-2">コロナ禍でオンライン開催となり、帰宅がないため無限デスマーチとなりました。休息の必要性を実感した貴重な経験です。</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">プロジェクトの工夫</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">ゲームプレイ</th>
              <td className="py-2">横スクロールシューティングの楽しさと難易度調整に力を入れて製作しました</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">ビジュアル</th>
              <td className="py-2">必要なパーツの制作だけでなく、アニメーション差分や隠し要素を制作し、手間をあまり増やさずに豪華な印象を実現しました</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">評価</th>
              <td className="py-2">イベント参加チームの中でかなり好評を得ることができました</td>
            </tr>
          </tbody>
        </table>

        <p className="text-stone-pavement italic">現在、配布されておりません。</p>
      </div>
    ),
  },
  {
    id: 'baker',
    title: 'I wanna be the baker',
    thumbnail: '/image/Baker.jpg',
    category: 'games',
    detail: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-greek-blue">I wanna be the baker</h2>
        <img src="/image/baker-title.jpg" alt="I wanna be the baker" className="w-full rounded-lg" />

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">MIS.W Game Jam 2019にて、3日間で制作したタイピング&アクションゲームです。「将来の夢がパン屋さん」という一言から生まれた作品で、昼間は限界ITエンジニア、夜は魔法のトングでパンを集める魔法少女というアイデアを形にしました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">ゲーム構成</th>
              <td className="py-2">前半ステージは難しめのコーディング風タイピングゲーム、後半は爽快感のある横スクロールシューティングゲームになっています。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">担当範囲</th>
              <td className="py-2">イラスト、デザイン</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">開発の工夫</h3>
        <p>3日間の開発期間のなかで、目玉のキャラクターイラスト制作とその他の素材の作業時間配分に気をつけて制作しました。</p>
        <p>具体的には、まず全ての素材のラフを制作し実装した後、完成イラストを差し替えるアプローチを取ることで、効率よく高品質な作品を実現しました。</p>

        <div className="text-center">
          <a
            href="https://www.freem.ne.jp/win/game/20217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-greek-blue text-white rounded-lg hover:bg-blue-eyes transition-colors font-bold"
          >
            配布ページへ移動
          </a>
        </div>

        <img src="/image/mahousyoujyo-smile.png" alt="魔法少女" className="w-full rounded-lg" />
        <img src="/image/desktop-zangyou.jpg" alt="残業デスクトップ" className="w-full rounded-lg" />
      </div>
    ),
  },
  {
    id: 'accommodation',
    title: '民泊 黒門館アネックス1F / 青鳥荘',
    thumbnail: '/image/BlueBird.jpg',
    category: 'others',
    detail: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-greek-blue">黒門館アネックス1F / 青鳥荘</h2>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">ホームページ</h3>
        <iframe
          src="https://kuromonkan.com/"
          className="w-full h-[400px] border border-limestone rounded-lg"
          title="ホームページ プレビュー"
        />

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">開発言語</th>
              <td className="py-2">TypeScript, Next.js, Tailwind CSS</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">サーバー</th>
              <td className="py-2">Cloudflare</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">日英中の言語切替が可能な、民泊宿泊者向けのホームページ兼アクセスガイドです。</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">背景と改善点</h3>
        <p>旧アクセスガイドはPDFで、3言語での説明が詰め込まれていて見づらかった。そのため、言語切り替えボタンのあるホームページを制作することで、見やすさと利便性を向上させました。</p>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">旧PDFの一部</h3>
        <img src="/image/parking.jpg" alt="旧PDF" className="w-full rounded-lg" />

        <div className="text-center">
          <a
            href="https://kuromonkan.sakura.ne.jp/website/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-greek-blue text-white rounded-lg hover:bg-blue-eyes transition-colors font-bold"
          >
            ホームページへ移動
          </a>
        </div>
      </div>
    ),
  },
    {
    id: 'share-house-work',
    title: 'シェアハウス管理アプリ「Share House Work」',
    thumbnail: '/image/share-image.png',
    category: 'others',
    detail: (
      <div className="space-y-6">
        <img src="/image/share-image.png" alt="Share House Work" className="w-full rounded-lg" />
        <h2 className="text-2xl font-bold text-greek-blue">シェアハウス管理アプリ「Share House Work」</h2>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">アプリ概要</h3>
        <img src="/image/share-house-tasks.png" alt="タスク管理画面" className="w-full rounded-lg" />

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">自身のシェアハウス生活での実体験をもとに、「実際に欲しい機能」を形にしたWebアプリです。メンバー間でのタスク管理・費用管理・情報共有をひとつのプラットフォームで行えます。フロントエンド・バックエンド・リリースまで初めてのフルスタック開発を一人で担当しました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作期間</th>
              <td className="py-2">2週間</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">主な機能</th>
              <td className="py-2">ログイン・メール認証 / タスク管理 / 共益費管理 / 買い物リスト / ルール / お知らせ</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">使用技術</th>
              <td className="py-2">TypeScript, Next.js, Firebase (Firestore・メール認証), Tailwind CSS</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">開発ツール</th>
              <td className="py-2">Claude Code, Codex</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">デプロイ</th>
              <td className="py-2">Vercel</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">リリース日</th>
              <td className="py-2">2026年3月7日</td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4 justify-center">
          <a
            href="https://share-house-work.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-greek-blue text-white rounded-lg hover:bg-blue-eyes transition-colors font-bold"
          >
            アプリへ移動
          </a>
          <a
            href="https://github.com/fujishio/ShareHouseWork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-greek-blue text-greek-blue rounded-lg hover:bg-greek-blue hover:text-white transition-colors font-bold"
          >
            GitHubへ移動
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'meal-suggest',
    title: 'ご飯サジェストサイト',
    thumbnail: '/image/menu.png',
    category: 'others',
    detail: (
      <div className="space-y-6">
        <img src="/image/menu.png" alt="ご飯サジェストサイト" className="w-full rounded-lg" />
        <h2 className="text-2xl font-bold text-greek-blue">ご飯サジェストサイト</h2>

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">制作概要</th>
              <td className="py-2">2025年冬インターンでのWebサイト制作プロジェクト。開発期間は10日間。SQLのデータベースからランダムで食事メニューを一つ提案するサイト。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">開発言語</th>
              <td className="py-2">HTML, CSS, SQL</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">チーム構成</th>
              <td className="py-2">計5名（初対面チーム）</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">担当</th>
              <td className="py-2">プロジェクトリーダー、フロントエンド・ロジック実装</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold border-b border-parthenon pb-1">プロジェクトの工夫</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">難易点</th>
              <td className="py-2">プルダウンで選択したジャンルに絞り込んで抽出するロジックの実装が難しかったです。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">リーダーシップ</th>
              <td className="py-2">ほぼ初対面の5人チームのリーダーを任されて不安でしたが、今までのチーム開発ノウハウをそのまま活かすことで対応しました。</td>
            </tr>
            <tr className="border-b border-limestone">
              <th className="text-right pr-4 py-2 whitespace-nowrap align-top text-acropolis">成果</th>
              <td className="py-2">無事に目標のペースで実装を進めることができました。実際にチームメンバーがサイトを利用して食事メニューを決定しており、大変嬉しかったです。</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'journal-figures',
    title: '論文の図版作成',
    thumbnail: '/image/movie/F09A.jpg',
    category: 'others',
    detail: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-greek-blue">論文の図版作成</h2>
        <p>
          知人のジャーナル用に描いたイラスト16枚です。
          映画の画面構成に関する論文で使用するため、配給会社に許可を求めたところ、直接使用は不可でしたが、トレスした上での図版作成は許可をいただくことができました。
          分量が多く作業期間が短かったため、最小の構成で最大の情報量を伝えることを意識して制作しました。結果的に、より映像の構成要素が分かりやすく伝わる図版になったと感じています。
        </p>
        <div className="space-y-4">
          {['F09A','F09B','F10A','F10B','F11_2001','F12_2001','F13A','F13B','F14A','F14B','F15A','F15B','F16A','F16B','F17A','F17B'].map((name) => (
            <img key={name} src={`/image/movie/${name}.jpg`} alt={name} className="w-full rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    ),
  },
]
