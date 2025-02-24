<script setup>
    import {ref } from 'vue';
    const countBookmark = ref(0);
    function Note(){
        countBookmark.value++;
    }
</script>

<template>
    <div>
        <div class="post-container">
            <div class="infor">
                <div class="left-infor">
                    <p style="font-size: 14px;font-weight: 700;color:#5488C7">Huỳnh Thanh Tùng</p>
                    <p>@Thanh_Tung</p>
                </div>
                <div class="right-infor">
                    <p>Đã đăng vào thg 12 23,2019 8:22 CH - 4 phút đọc </p>
                    <div class="bookmark-container">
                        <font-awesome-icon @click="Note" style="color:#9B9B9B;font-size: 20px;" :icon="['fas', 'bookmark']" />
                        <span>{{ countBookmark }}</span>
                    </div>
                </div>

            </div> 
            <h1 style="font-size: 40px;font-weight: 700;">Những chú ý khi sử dụng v-model trong vue js</h1>
            <div class="part">
                <h3>Mở đầu</h3>
                <p>v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. Bạn có thể sử dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu nhập. Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành 😄 Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía Javascript bên trong các component.</p>
            </div>
            <div class="part">
                <h3>Hoạt động của v-model</h3>
                <p>v-model là một syntax sugar (cú pháp ngọt - dễ nhìn) để viết v-on và v-bind với nhau trong một dòng. Tổng quan, hai dòng sau thực hiện cùng một hoạt động:</p>
                <div class="border">
                    &lt;input v-model=&quot;searchText&quot;&gt;<br>
                    &lt;input :value=&quot;searchText&quot; @change=&quot;searchText = $event.target.value&quot;&gt;
                </div>
                <p>Thành phần tùy chỉnh của v-model Trường hợp sử dụng v-model đối với thành phần tùy chỉnh, mặc định thì props được gọi là value và sự kiện của input được sử dụng. Value này có thể thay đổi được bằng định nghĩa ở phía thành phần tùy chỉnh.
                <br>
                Ví dụng sau được trích từ trang tài liệu tham khảo chính thức:</p>
                <div class="border">
                    <pre>
&lt;Vue.component(&#39;my-checkbox&#39;, {&gt;
  model: {
    prop: &#39;checked&#39;,
    event: &#39;change&#39;
  },
  props: {
    // Tùy theo điều này,  cho phép sử dụng thuộc tính `value` với mục đích riêng biệt.
    value: String,
    // `checked` sẽ được sử dụng như thuộc tính thay thế `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})&gt;              </pre>
                </div>
            </div>
            
            <div class="part">
                <h3>Những lỗi thường gặp</h3>
                <p>Viêt cả v-model và <span><a href="https://viblo.asia/u/change">@change</a></span> V-model như đã nói ở trên là Event handling (xử lý sự kiện). Nên việc kết hợp viết hai lần sử dụng v-model và <span><a href="https://viblo.asia/u/change">@change</a></span> là không cần thiết, và làm cho code trở nên Not Syntax Suger. Ví dụ như đoạn mã ở dưới.</p>
                <br>
                <p>// Đoạn code lỗi</p>
                <div class="border">
                    &lt;input v-model=&quot;searchText&quot; @change=&quot;(value) =&gt; searchText = value&quot;&gt;
                </div>
                <p>Do bản thân v-model đã có sẵn Event handling (xử lý sự kiện) của sự kiện @change, nên sự kiện đối với change bị lặp lại hai lần. Nếu trường hợp muốn xử lý nhiều sự kiện hơn một sự kiện change, chúng ta nên dùng việc sử dụng v-model và thay thế vào đó là sử dụng đồng thời v-bind và v-on hoặc sử dụng thuộc tính thay thế searchText.</p>
                <br>
                <p>// Đoạn code chuẩn Syntax Suger</p>
                <div class="border">
                  <pre>
&lt;input v-model=&quot;searchText&quot;&gt;
&lt;script&gt;
data(){
  return {
    innerSearchText: &#39;&#39;
  }
},
computed: {
  searchText: {
    get () {
    return this.innerSearchText
    },
    set (value) {
    this.innerSearchText = value
    }
  }
}
&lt;/script&gt;   </pre>
                </div>
                <p>// Đoạn code chuẩn Syntax Suger</p>
                <div class="border">
                    <pre style="font-family: monospace;">
&lt;input :value=&quot;searchText&quot; @change=&quot;onChange&quot;&gt;
&lt;script&gt;
data(){
  return {
    searchText: &#39;&#39;
  }
}
&lt;/script&gt;     </pre>
                </div>
                <p>Sự kết hợp giữa v-model và set tạo động lực phát triển cho trường hợp kết hợp với Vuex với nhiều nội dung khác.</p>
                <br>
                <p>Truyền nguyên props cho v-model Đối với biến v-model, trường hợp muốn làm cầu nói với props thì mình thấy rất nhiều. Nhưng nếu sử dụng điều này, lỗi cảnh báo sẽ được hiển thị vì props bị thay đổi trực tiếp.</p>
                <p>&lt;!-- Đoạn mã lỗi --&gt;</p>
                <div class="border">
                    <pre style="font-family: monospace;">
&lt;input v-model=&quot;searchText&quot;&gt; # Cảnh báo sẽ được hiển thị vì v-model thực thi searchText = $event.target.value
&lt;script&gt;
  props: {
    searchText: String
  }
&lt;/script&gt;     </pre>
                </div>
                <p>Ngoài ra, để sử lỗi này, việc định nghĩa data từ giá trị của props sẽ tạo ra lỗi tương tự. Ví dụ như đoạn code ở dưới:</p>
                <p>&lt;!-- Đoạn mã lỗi --&gt;</p>
                <div class="border">
                    <pre style="font-family: monospace;">
&lt;input v-model=&quot;searchTextData&quot;&gt;
&lt;script&gt;
  props: {
    searchText: String
  },
  data() {
    return {
      searchTextData: this.$props.searchText 
    }
  }
&lt;/script&gt;     </pre>
                </div>
                <p>Đoạn mã này nhìn thì thấy có vẻ như hoạt động đúng. Nhưng trên thực tế, sau khi giá trị của props được khởi tạo thì giá trị giữa props và data sẽ không được đồng bộ. Cho nên, dù đã sử thành đoạn mã mới, nhưng việc sửa chữa vẫn không được thực thi đúng.</p>
                <br>
                <p>Vậy thì làm thế nào để có thể tránh nó? Bằng cách sử dụng các thuộc tính được tính toán thì có thể khắc phục được..</p>
                <p>&lt;!-- Đoạn code chuẩn Syntax Suger --&gt;</p>
                <div class="border">
                    <pre style="font-family: monospace;">
&lt;input v-model=&quot;innerSearchText&quot;&gt;
&lt;script&gt;
  props: {
    searchText: String
  },
  computed: {
    innerSearchText: {
      get () {
        return this.$props.searchText
      },
      set (value) {
        this.$emit(&#39;change&#39;, value)
      }
    }
  }
&lt;/script&gt;     </pre>
                </div>
                <h3>Tổng quan</h3>
                <p>Đó là, thay vì gán một giá trị trong thành phần này, nó sẽ gửi một giá trị dưới dạng một sự kiện cho thành phần cha. Và bằng cách viết lại giá trị của props ở phía thành phần cha, thành phần này có thể được sử dụng một cách chính xác. Ngoài ra còn có một phương pháp sử dụng watch thay vì setter, nhưng tôi không khuyến nghị cá nhân vì luồng dữ liệu rất khó nhìn thấy.</p>
            </div>

            <div>

            </div>
        </div>
    </div>
</template>
 
<style>
body{
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color:#1B1B1B;

}
.post-container{
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding-bottom: 250px;
}

.infor{
    display:flex;
    justify-content: space-between;
}

.left-infor{
    width: 50%;
    display: flex;
    color:#9B9B9B;
    gap:10px;
}

.left-infor-line1{
    display:flex;
}

.left-infor-line2{
    display:flex;
}

.right-infor{
    display:flex;
    flex-direction: column;
    align-items: flex-end;
}

.bookmark-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    cursor: pointer;
}

.part{
    margin-top:50px;
    font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.part h3{
    font-size: 26.1px;
    font-weight: 700;
}

.part p{
    font-size: 20px;
}

.part a{
    background-color: white;
    font-size: 18px;
    color:#2B6DAD;
}

.part a:hover{
    text-decoration: underline;
}

.border{
    width: 100%;
    font-size: 15px;
    color:#24292E;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    padding:10px;
    background-color: #f1f2f3;
    border-style: solid;
    border-width: 1px;
    border-color: #e5e5e5;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: auto;
}
</style>