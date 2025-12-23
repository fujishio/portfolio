/**
 * モーダルを開く関数
 * @param {string} modalId - 開きたいモーダルのID
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        // CSSの .is-active クラスを付与してモーダルを表示
        modal.classList.add('is-active'); 
        
        // 外側（オーバーレイ）をクリックした時の処理を設定
        modal.onclick = function(event) {
            // クリックターゲットがモーダル要素自体（オーバーレイ）であれば閉じる
            if (event.target === modal) {
                closeModal(modalId);
            }
        };
    }
}

/**
 * モーダルを閉じる関数
 * @param {string} modalId - 閉じたいモーダルのID
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        // CSSの .is-active クラスを削除してモーダルを非表示
        modal.classList.remove('is-active');
        
        // 外側クリックイベントを解除（メモリと動作のクリーンアップ）
        modal.onclick = null;
    }
}

// Escキーが押されたときに開いているモーダルを閉じる処理
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        // 現在開いているモーダル要素を検索
        const activeModal = document.querySelector('.modal.is-active');
        
        if (activeModal) {
            closeModal(activeModal.id); 
        }
    }
});



/**
 * サムネイルクリック時に大画像を切り替える関数
 * @param {HTMLElement} clickedThumbnail - クリックされたサムネイル要素
 */
function changeImage(clickedThumbnail) {
    // 1. 大プレビュー画像の要素を取得
    const mainImage = document.getElementById('mainImage');
    
    // 2. クリックされたサムネイルから、対応する大画像のファイルパスを取得
    const largeSrc = clickedThumbnail.getAttribute('data-large-src');

    if (mainImage && largeSrc) {
        // 画像を切り替える前に、ふわっと消えるアニメーションを適用 (CSSのtransitionと連携)
        mainImage.style.opacity = 0;

        // 0.3秒後に画像のsrcを切り替え、フェードインさせる (CSSのtransition時間と合わせる)
        setTimeout(() => {
            mainImage.src = largeSrc;
            mainImage.style.opacity = 1;
        }, 300); 

        // 3. アクティブなサムネイルの状態を更新（枠線表示のため）
        // 現在アクティブなサムネイルから 'active' クラスを削除
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        
        // クリックされたサムネイルに 'active' クラスを付与
        clickedThumbnail.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pageTopButton = document.getElementById('pageTop');
    // ボタンを表示させるためのスクロール量（例: 200pxスクロールしたら表示）
    const scrollThreshold = 200; 

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        // 現在のスクロール位置を取得 (scrollY または pageYOffset)
        const currentScroll = window.scrollY || window.pageYOffset;

        if (currentScroll > scrollThreshold) {
            // スクロール量が閾値を超えたら 'show' クラスを追加してボタンを表示
            pageTopButton.classList.add('show');
        } else {
            // スクロール量が閾値以下なら 'show' クラスを削除してボタンを非表示
            pageTopButton.classList.remove('show');
        }
    });

    // ボタンをクリックしたとき、スムーズにページトップへスクロールする処理（任意）
    pageTopButton.addEventListener('click', (e) => {
        // デフォルトのリンク動作（即座にトップへ飛ぶ）をキャンセル
        e.preventDefault(); 
        
        // スムーズスクロールを実行
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});
